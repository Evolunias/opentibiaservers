import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-low-exp-server-usa');
}

export default function AlasteraLowExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="alastera-low-exp-server-usa" />;
}
