import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-archlight-ots');
}

export default function NoResetArchlightOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-archlight-ots" />;
}
