import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-pvp-server-mexico');
}

export default function CyntaraPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="cyntara-pvp-server-mexico" />;
}
