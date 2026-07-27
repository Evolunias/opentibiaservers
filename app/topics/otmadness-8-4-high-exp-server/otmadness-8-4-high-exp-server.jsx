import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-8-4-high-exp-server');
}

export default function Otmadness84HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-8-4-high-exp-server" />;
}
