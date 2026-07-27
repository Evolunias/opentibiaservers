import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-archlight-client');
}

export default function NewArchlightClientKeywordPage() {
  return <StaticKeywordPage slug="new-archlight-client" />;
}
