import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-9-6-retro-server');
}

export default function Carlinot96RetroServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-9-6-retro-server" />;
}
