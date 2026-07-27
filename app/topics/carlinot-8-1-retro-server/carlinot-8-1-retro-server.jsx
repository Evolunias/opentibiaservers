import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-8-1-retro-server');
}

export default function Carlinot81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-8-1-retro-server" />;
}
