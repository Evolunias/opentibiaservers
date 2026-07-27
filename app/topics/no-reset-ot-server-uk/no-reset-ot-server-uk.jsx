import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ot-server-uk');
}

export default function NoResetOtServerUkKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ot-server-uk" />;
}
