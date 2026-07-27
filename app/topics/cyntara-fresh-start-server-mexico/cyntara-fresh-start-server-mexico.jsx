import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-fresh-start-server-mexico');
}

export default function CyntaraFreshStartServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="cyntara-fresh-start-server-mexico" />;
}
