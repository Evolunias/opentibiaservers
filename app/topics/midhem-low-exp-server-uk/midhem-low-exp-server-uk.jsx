import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-low-exp-server-uk');
}

export default function MidhemLowExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="midhem-low-exp-server-uk" />;
}
