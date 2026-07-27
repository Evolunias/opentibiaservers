import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-low-exp-server-mexico');
}

export default function AlasteraLowExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="alastera-low-exp-server-mexico" />;
}
