import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-oldera-ot-server');
}

export default function NoResetOlderaOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-oldera-ot-server" />;
}
