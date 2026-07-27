import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-7-72-high-exp-server');
}

export default function Alastera772HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-7-72-high-exp-server" />;
}
