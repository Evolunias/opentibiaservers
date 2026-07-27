import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-7-6-high-exp-server');
}

export default function Otmadness76HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-7-6-high-exp-server" />;
}
