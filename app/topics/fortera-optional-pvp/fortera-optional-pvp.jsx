import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fortera-optional-pvp');
}

export default function ForteraOptionalPvpKeywordPage() {
  return <StaticKeywordPage slug="fortera-optional-pvp" />;
}
