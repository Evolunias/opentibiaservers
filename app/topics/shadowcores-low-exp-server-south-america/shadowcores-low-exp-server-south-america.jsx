import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-low-exp-server-south-america');
}

export default function ShadowcoresLowExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-low-exp-server-south-america" />;
}
