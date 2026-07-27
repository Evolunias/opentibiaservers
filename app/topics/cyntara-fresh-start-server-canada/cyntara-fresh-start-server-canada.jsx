import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-fresh-start-server-canada');
}

export default function CyntaraFreshStartServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-fresh-start-server-canada" />;
}
