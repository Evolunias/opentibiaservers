import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ot-server-canada');
}

export default function NoResetOtServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ot-server-canada" />;
}
