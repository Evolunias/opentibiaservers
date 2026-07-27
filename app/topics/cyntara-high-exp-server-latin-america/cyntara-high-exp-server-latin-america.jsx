import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-high-exp-server-latin-america');
}

export default function CyntaraHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-high-exp-server-latin-america" />;
}
