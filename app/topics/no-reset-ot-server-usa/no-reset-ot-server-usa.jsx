import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ot-server-usa');
}

export default function NoResetOtServerUsaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ot-server-usa" />;
}
