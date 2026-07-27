import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-high-exp-server-argentina');
}

export default function CyntaraHighExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-high-exp-server-argentina" />;
}
