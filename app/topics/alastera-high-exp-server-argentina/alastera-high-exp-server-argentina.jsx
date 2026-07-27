import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-high-exp-server-argentina');
}

export default function AlasteraHighExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="alastera-high-exp-server-argentina" />;
}
