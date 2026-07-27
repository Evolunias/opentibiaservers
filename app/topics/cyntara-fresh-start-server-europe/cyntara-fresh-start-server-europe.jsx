import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-fresh-start-server-europe');
}

export default function CyntaraFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="cyntara-fresh-start-server-europe" />;
}
