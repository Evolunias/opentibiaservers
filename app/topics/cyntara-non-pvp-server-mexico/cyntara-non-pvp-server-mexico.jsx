import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-non-pvp-server-mexico');
}

export default function CyntaraNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="cyntara-non-pvp-server-mexico" />;
}
