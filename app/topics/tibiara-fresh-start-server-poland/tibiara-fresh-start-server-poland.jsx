import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-fresh-start-server-poland');
}

export default function TibiaraFreshStartServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiara-fresh-start-server-poland" />;
}
