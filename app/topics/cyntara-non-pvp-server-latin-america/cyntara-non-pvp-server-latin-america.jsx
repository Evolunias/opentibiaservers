import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-non-pvp-server-latin-america');
}

export default function CyntaraNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-non-pvp-server-latin-america" />;
}
