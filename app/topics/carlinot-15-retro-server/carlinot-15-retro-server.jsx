import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-15-retro-server');
}

export default function Carlinot15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-15-retro-server" />;
}
