import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-10-0-high-exp-server');
}

export default function Otmadness100HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-10-0-high-exp-server" />;
}
