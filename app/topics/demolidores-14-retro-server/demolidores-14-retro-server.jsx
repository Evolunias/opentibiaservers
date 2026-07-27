import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-14-retro-server');
}

export default function Demolidores14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-14-retro-server" />;
}
