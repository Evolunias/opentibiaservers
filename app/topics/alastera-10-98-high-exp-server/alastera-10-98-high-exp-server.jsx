import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-10-98-high-exp-server');
}

export default function Alastera1098HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-10-98-high-exp-server" />;
}
