import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternia-open-pvp');
}

export default function EterniaOpenPvpKeywordPage() {
  return <StaticKeywordPage slug="eternia-open-pvp" />;
}
