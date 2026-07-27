import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-8-6-high-exp-server');
}

export default function Alastera86HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-8-6-high-exp-server" />;
}
