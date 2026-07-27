import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-pvp-history');
}

export default function LumineraPvpHistoryKeywordPage() {
  return <StaticKeywordPage slug="luminera-pvp-history" />;
}
