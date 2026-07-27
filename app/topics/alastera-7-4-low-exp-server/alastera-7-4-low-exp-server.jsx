import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-7-4-low-exp-server');
}

export default function Alastera74LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-7-4-low-exp-server" />;
}
