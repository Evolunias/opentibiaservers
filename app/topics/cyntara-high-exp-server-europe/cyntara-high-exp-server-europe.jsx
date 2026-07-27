import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-high-exp-server-europe');
}

export default function CyntaraHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="cyntara-high-exp-server-europe" />;
}
