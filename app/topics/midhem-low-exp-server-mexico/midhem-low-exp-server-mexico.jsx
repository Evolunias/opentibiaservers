import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-low-exp-server-mexico');
}

export default function MidhemLowExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="midhem-low-exp-server-mexico" />;
}
