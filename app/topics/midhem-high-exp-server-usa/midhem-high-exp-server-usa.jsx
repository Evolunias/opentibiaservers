import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-high-exp-server-usa');
}

export default function MidhemHighExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="midhem-high-exp-server-usa" />;
}
