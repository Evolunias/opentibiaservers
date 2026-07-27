import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-fresh-start-server-uk');
}

export default function CyntaraFreshStartServerUkKeywordPage() {
  return <StaticKeywordPage slug="cyntara-fresh-start-server-uk" />;
}
