import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-non-pvp-server-germany');
}

export default function CyntaraNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="cyntara-non-pvp-server-germany" />;
}
