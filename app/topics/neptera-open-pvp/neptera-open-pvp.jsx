import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neptera-open-pvp');
}

export default function NepteraOpenPvpKeywordPage() {
  return <StaticKeywordPage slug="neptera-open-pvp" />;
}
