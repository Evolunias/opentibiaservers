import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-low-exp-server-poland');
}

export default function AlasteraLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="alastera-low-exp-server-poland" />;
}
