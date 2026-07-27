import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-high-exp-server-germany');
}

export default function CyntaraHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="cyntara-high-exp-server-germany" />;
}
