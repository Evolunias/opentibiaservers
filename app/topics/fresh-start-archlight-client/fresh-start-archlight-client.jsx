import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-archlight-client');
}

export default function FreshStartArchlightClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-archlight-client" />;
}
