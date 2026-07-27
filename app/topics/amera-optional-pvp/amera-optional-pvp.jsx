import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('amera-optional-pvp');
}

export default function AmeraOptionalPvpKeywordPage() {
  return <StaticKeywordPage slug="amera-optional-pvp" />;
}
