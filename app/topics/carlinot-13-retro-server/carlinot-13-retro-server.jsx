import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-13-retro-server');
}

export default function Carlinot13RetroServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-13-retro-server" />;
}
