import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-archlight-client');
}

export default function BestArchlightClientKeywordPage() {
  return <StaticKeywordPage slug="best-archlight-client" />;
}
