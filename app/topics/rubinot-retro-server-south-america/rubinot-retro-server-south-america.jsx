import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-retro-server-south-america');
}

export default function RubinotRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-retro-server-south-america" />;
}
