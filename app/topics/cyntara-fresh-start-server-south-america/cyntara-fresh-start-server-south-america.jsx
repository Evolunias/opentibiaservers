import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-fresh-start-server-south-america');
}

export default function CyntaraFreshStartServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-fresh-start-server-south-america" />;
}
