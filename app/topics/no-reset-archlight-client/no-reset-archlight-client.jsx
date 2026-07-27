import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-archlight-client');
}

export default function NoResetArchlightClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-archlight-client" />;
}
