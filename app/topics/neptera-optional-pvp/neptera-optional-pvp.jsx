import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neptera-optional-pvp');
}

export default function NepteraOptionalPvpKeywordPage() {
  return <StaticKeywordPage slug="neptera-optional-pvp" />;
}
