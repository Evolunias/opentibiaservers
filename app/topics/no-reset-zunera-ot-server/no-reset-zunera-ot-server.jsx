import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-zunera-ot-server');
}

export default function NoResetZuneraOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-zunera-ot-server" />;
}
