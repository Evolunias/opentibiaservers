import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-market');
}

export default function DuraOnlineMarketKeywordPage() {
  return <StaticKeywordPage slug="dura-online-market" />;
}
