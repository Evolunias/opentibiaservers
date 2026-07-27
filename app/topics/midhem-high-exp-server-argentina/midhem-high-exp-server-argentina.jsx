import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-high-exp-server-argentina');
}

export default function MidhemHighExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="midhem-high-exp-server-argentina" />;
}
