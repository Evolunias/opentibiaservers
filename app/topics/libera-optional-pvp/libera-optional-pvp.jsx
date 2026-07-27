import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('libera-optional-pvp');
}

export default function LiberaOptionalPvpKeywordPage() {
  return <StaticKeywordPage slug="libera-optional-pvp" />;
}
