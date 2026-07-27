import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-fresh-start-server-europe');
}

export default function SerenityFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="serenity-fresh-start-server-europe" />;
}
