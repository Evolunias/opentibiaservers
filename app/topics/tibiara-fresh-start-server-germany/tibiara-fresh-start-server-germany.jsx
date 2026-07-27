import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-fresh-start-server-germany');
}

export default function TibiaraFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiara-fresh-start-server-germany" />;
}
