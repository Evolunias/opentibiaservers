import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-15-high-exp-server');
}

export default function Otmadness15HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-15-high-exp-server" />;
}
