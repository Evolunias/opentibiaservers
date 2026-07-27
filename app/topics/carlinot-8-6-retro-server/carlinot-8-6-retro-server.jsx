import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-8-6-retro-server');
}

export default function Carlinot86RetroServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-8-6-retro-server" />;
}
