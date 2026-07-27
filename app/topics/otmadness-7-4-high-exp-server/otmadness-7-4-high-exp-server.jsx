import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-7-4-high-exp-server');
}

export default function Otmadness74HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-7-4-high-exp-server" />;
}
