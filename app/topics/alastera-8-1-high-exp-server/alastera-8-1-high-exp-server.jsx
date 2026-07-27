import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-8-1-high-exp-server');
}

export default function Alastera81HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-8-1-high-exp-server" />;
}
