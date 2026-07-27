import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-11-high-exp-server');
}

export default function Otmadness11HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-11-high-exp-server" />;
}
