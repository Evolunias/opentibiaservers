import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-low-exp-server-canada');
}

export default function AlasteraLowExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="alastera-low-exp-server-canada" />;
}
