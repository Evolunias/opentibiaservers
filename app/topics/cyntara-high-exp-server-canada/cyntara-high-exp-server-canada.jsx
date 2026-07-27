import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-high-exp-server-canada');
}

export default function CyntaraHighExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-high-exp-server-canada" />;
}
