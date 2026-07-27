import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-low-exp-server-south-america');
}

export default function AlasteraLowExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-low-exp-server-south-america" />;
}
