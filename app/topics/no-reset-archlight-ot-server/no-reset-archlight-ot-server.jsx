import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-archlight-ot-server');
}

export default function NoResetArchlightOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-archlight-ot-server" />;
}
