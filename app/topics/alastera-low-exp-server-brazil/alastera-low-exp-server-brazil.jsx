import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-low-exp-server-brazil');
}

export default function AlasteraLowExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="alastera-low-exp-server-brazil" />;
}
