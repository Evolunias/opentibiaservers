import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-pvp-server-brazil');
}

export default function CyntaraPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="cyntara-pvp-server-brazil" />;
}
