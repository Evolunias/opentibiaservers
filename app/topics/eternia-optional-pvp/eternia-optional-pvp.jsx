import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternia-optional-pvp');
}

export default function EterniaOptionalPvpKeywordPage() {
  return <StaticKeywordPage slug="eternia-optional-pvp" />;
}
