import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-retro-server-sweden');
}

export default function CarlinotRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="carlinot-retro-server-sweden" />;
}
