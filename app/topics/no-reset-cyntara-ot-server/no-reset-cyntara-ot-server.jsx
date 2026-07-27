import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-cyntara-ot-server');
}

export default function NoResetCyntaraOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-cyntara-ot-server" />;
}
