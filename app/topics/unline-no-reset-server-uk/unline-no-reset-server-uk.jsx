import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-no-reset-server-uk');
}

export default function UnlineNoResetServerUkKeywordPage() {
  return <StaticKeywordPage slug="unline-no-reset-server-uk" />;
}
