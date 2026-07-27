import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-11-retro-server');
}

export default function Demolidores11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-11-retro-server" />;
}
