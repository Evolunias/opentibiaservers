import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-13-retro-server');
}

export default function Demolidores13RetroServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-13-retro-server" />;
}
