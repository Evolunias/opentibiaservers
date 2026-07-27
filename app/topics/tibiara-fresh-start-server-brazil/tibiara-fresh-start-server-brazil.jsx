import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-fresh-start-server-brazil');
}

export default function TibiaraFreshStartServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiara-fresh-start-server-brazil" />;
}
