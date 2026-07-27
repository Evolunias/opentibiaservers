import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-11-retro-server');
}

export default function Carlinot11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-11-retro-server" />;
}
