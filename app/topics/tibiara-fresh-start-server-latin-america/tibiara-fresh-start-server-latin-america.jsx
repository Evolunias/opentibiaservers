import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-fresh-start-server-latin-america');
}

export default function TibiaraFreshStartServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-fresh-start-server-latin-america" />;
}
