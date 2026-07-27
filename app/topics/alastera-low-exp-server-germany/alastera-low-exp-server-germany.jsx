import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-low-exp-server-germany');
}

export default function AlasteraLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="alastera-low-exp-server-germany" />;
}
