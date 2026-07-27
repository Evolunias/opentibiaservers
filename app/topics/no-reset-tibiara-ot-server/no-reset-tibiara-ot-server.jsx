import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiara-ot-server');
}

export default function NoResetTibiaraOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiara-ot-server" />;
}
