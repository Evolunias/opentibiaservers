import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kyra-optional-pvp');
}

export default function KyraOptionalPvpKeywordPage() {
  return <StaticKeywordPage slug="kyra-optional-pvp" />;
}
