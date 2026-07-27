import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-high-exp-server-north-america');
}

export default function CyntaraHighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-high-exp-server-north-america" />;
}
