import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('honera-optional-pvp');
}

export default function HoneraOptionalPvpKeywordPage() {
  return <StaticKeywordPage slug="honera-optional-pvp" />;
}
