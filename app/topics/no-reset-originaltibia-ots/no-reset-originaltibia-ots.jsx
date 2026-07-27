import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-originaltibia-ots');
}

export default function NoResetOriginaltibiaOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-originaltibia-ots" />;
}
