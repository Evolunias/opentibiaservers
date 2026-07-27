import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-pvp-server-canada');
}

export default function CyntaraPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-pvp-server-canada" />;
}
