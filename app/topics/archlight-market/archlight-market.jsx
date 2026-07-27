import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-market');
}

export default function ArchlightMarketKeywordPage() {
  return <StaticKeywordPage slug="archlight-market" />;
}
