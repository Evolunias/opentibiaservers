import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-server-uk');
}

export default function NoResetServerUkKeywordPage() {
  return <StaticKeywordPage slug="no-reset-server-uk" />;
}
