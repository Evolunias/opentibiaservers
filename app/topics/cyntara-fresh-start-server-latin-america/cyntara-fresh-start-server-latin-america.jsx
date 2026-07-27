import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-fresh-start-server-latin-america');
}

export default function CyntaraFreshStartServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-fresh-start-server-latin-america" />;
}
