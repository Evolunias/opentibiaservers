import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-12-high-exp-server');
}

export default function Otmadness12HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-12-high-exp-server" />;
}
