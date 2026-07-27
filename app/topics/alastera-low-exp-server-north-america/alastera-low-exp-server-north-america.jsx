import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-low-exp-server-north-america');
}

export default function AlasteraLowExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-low-exp-server-north-america" />;
}
