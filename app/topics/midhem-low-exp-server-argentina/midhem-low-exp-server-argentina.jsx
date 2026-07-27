import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-low-exp-server-argentina');
}

export default function MidhemLowExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="midhem-low-exp-server-argentina" />;
}
