import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-non-pvp-server-south-america');
}

export default function CyntaraNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-non-pvp-server-south-america" />;
}
