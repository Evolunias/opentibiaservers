import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-pvp-server-germany');
}

export default function CyntaraPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="cyntara-pvp-server-germany" />;
}
