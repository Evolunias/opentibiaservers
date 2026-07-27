import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-no-reset-server-uk');
}

export default function MidhemNoResetServerUkKeywordPage() {
  return <StaticKeywordPage slug="midhem-no-reset-server-uk" />;
}
