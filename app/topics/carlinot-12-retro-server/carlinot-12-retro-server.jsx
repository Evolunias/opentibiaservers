import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-12-retro-server');
}

export default function Carlinot12RetroServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-12-retro-server" />;
}
