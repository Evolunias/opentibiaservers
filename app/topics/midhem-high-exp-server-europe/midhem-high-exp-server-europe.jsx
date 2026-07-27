import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-high-exp-server-europe');
}

export default function MidhemHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="midhem-high-exp-server-europe" />;
}
