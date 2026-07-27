import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-high-exp-server-usa');
}

export default function AlasteraHighExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="alastera-high-exp-server-usa" />;
}
