import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ot-server-germany');
}

export default function NoResetOtServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ot-server-germany" />;
}
