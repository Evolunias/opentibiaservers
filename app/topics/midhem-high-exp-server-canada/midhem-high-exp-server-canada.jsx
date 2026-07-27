import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-high-exp-server-canada');
}

export default function MidhemHighExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="midhem-high-exp-server-canada" />;
}
