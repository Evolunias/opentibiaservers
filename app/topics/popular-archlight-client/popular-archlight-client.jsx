import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-archlight-client');
}

export default function PopularArchlightClientKeywordPage() {
  return <StaticKeywordPage slug="popular-archlight-client" />;
}
