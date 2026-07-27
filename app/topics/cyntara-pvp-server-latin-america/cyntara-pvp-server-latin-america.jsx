import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-pvp-server-latin-america');
}

export default function CyntaraPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-pvp-server-latin-america" />;
}
