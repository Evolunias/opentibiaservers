import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-low-exp-server-argentina');
}

export default function AlasteraLowExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="alastera-low-exp-server-argentina" />;
}
