import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-fresh-start-server-germany');
}

export default function CyntaraFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="cyntara-fresh-start-server-germany" />;
}
