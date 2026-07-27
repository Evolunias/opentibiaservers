import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-pvp-server-south-america');
}

export default function CyntaraPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-pvp-server-south-america" />;
}
