import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-blazera-ot-server');
}

export default function NoResetBlazeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-blazera-ot-server" />;
}
