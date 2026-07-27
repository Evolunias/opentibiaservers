import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-non-pvp-server-brazil');
}

export default function CyntaraNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="cyntara-non-pvp-server-brazil" />;
}
