import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-8-4-low-exp-server');
}

export default function Alastera84LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-8-4-low-exp-server" />;
}
