import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-9-6-high-exp-server');
}

export default function Alastera96HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-9-6-high-exp-server" />;
}
