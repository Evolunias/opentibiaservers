import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-7-6-high-exp-server');
}

export default function Alastera76HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-7-6-high-exp-server" />;
}
