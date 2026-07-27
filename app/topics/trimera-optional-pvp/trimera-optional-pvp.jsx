import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trimera-optional-pvp');
}

export default function TrimeraOptionalPvpKeywordPage() {
  return <StaticKeywordPage slug="trimera-optional-pvp" />;
}
