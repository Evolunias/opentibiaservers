import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-fresh-start-server-uk');
}

export default function SerenityFreshStartServerUkKeywordPage() {
  return <StaticKeywordPage slug="serenity-fresh-start-server-uk" />;
}
