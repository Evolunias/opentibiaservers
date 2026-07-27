import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('isara-optional-pvp');
}

export default function IsaraOptionalPvpKeywordPage() {
  return <StaticKeywordPage slug="isara-optional-pvp" />;
}
