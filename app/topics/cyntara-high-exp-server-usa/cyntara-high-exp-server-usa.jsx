import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-high-exp-server-usa');
}

export default function CyntaraHighExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-high-exp-server-usa" />;
}
