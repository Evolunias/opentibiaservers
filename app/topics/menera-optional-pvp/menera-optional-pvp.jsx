import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('menera-optional-pvp');
}

export default function MeneraOptionalPvpKeywordPage() {
  return <StaticKeywordPage slug="menera-optional-pvp" />;
}
