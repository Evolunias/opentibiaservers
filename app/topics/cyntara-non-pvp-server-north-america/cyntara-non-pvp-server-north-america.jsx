import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-non-pvp-server-north-america');
}

export default function CyntaraNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-non-pvp-server-north-america" />;
}
