import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-archlight-server');
}

export default function NoResetArchlightServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-archlight-server" />;
}
