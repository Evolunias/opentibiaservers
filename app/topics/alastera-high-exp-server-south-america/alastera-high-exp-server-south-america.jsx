import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-high-exp-server-south-america');
}

export default function AlasteraHighExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-high-exp-server-south-america" />;
}
