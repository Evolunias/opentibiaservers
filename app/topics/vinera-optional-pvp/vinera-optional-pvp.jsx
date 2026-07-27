import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('vinera-optional-pvp');
}

export default function VineraOptionalPvpKeywordPage() {
  return <StaticKeywordPage slug="vinera-optional-pvp" />;
}
