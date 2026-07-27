import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-7-4-retro-server');
}

export default function Carlinot74RetroServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-7-4-retro-server" />;
}
