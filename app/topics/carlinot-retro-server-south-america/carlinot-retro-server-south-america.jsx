import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-retro-server-south-america');
}

export default function CarlinotRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-retro-server-south-america" />;
}
