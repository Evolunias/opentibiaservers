import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-10-98-high-exp-server');
}

export default function Otmadness1098HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-10-98-high-exp-server" />;
}
