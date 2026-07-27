import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-demolidores-ot-server');
}

export default function NoResetDemolidoresOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-demolidores-ot-server" />;
}
