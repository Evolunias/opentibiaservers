import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-low-exp-server-latin-america');
}

export default function CyntaraLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-low-exp-server-latin-america" />;
}
