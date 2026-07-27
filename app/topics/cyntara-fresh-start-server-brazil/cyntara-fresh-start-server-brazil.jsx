import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-fresh-start-server-brazil');
}

export default function CyntaraFreshStartServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="cyntara-fresh-start-server-brazil" />;
}
