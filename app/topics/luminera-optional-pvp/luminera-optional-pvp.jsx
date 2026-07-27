import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-optional-pvp');
}

export default function LumineraOptionalPvpKeywordPage() {
  return <StaticKeywordPage slug="luminera-optional-pvp" />;
}
