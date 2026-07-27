import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-high-exp-server-mexico');
}

export default function CyntaraHighExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="cyntara-high-exp-server-mexico" />;
}
