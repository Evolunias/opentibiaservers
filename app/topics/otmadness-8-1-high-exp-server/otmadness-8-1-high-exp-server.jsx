import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-8-1-high-exp-server');
}

export default function Otmadness81HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-8-1-high-exp-server" />;
}
