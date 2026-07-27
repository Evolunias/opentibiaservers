import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-high-exp-server-mexico');
}

export default function MidhemHighExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="midhem-high-exp-server-mexico" />;
}
