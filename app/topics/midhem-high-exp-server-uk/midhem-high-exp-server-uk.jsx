import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-high-exp-server-uk');
}

export default function MidhemHighExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="midhem-high-exp-server-uk" />;
}
