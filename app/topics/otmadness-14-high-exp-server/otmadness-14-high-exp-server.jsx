import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-14-high-exp-server');
}

export default function Otmadness14HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-14-high-exp-server" />;
}
