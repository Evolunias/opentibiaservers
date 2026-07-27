import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-fresh-start-server-argentina');
}

export default function TibiaraFreshStartServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-fresh-start-server-argentina" />;
}
