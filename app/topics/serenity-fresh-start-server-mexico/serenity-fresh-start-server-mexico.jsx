import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-fresh-start-server-mexico');
}

export default function SerenityFreshStartServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="serenity-fresh-start-server-mexico" />;
}
