import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-low-exp-server-canada');
}

export default function MidhemLowExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="midhem-low-exp-server-canada" />;
}
