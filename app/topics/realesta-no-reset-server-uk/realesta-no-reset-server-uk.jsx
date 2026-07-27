import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-no-reset-server-uk');
}

export default function RealestaNoResetServerUkKeywordPage() {
  return <StaticKeywordPage slug="realesta-no-reset-server-uk" />;
}
