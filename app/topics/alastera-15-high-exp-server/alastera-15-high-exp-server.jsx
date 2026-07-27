import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-15-high-exp-server');
}

export default function Alastera15HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-15-high-exp-server" />;
}
