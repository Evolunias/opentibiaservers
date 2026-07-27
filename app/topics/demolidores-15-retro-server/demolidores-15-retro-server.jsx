import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-15-retro-server');
}

export default function Demolidores15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-15-retro-server" />;
}
