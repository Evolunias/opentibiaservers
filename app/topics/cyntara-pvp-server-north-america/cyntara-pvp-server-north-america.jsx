import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-pvp-server-north-america');
}

export default function CyntaraPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-pvp-server-north-america" />;
}
