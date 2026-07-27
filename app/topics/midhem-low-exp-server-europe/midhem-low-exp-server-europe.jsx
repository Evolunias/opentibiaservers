import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-low-exp-server-europe');
}

export default function MidhemLowExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="midhem-low-exp-server-europe" />;
}
