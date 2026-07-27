import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-high-exp-server-poland');
}

export default function CyntaraHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="cyntara-high-exp-server-poland" />;
}
