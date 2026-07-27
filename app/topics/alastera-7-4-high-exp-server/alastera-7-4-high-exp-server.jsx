import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-7-4-high-exp-server');
}

export default function Alastera74HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-7-4-high-exp-server" />;
}
