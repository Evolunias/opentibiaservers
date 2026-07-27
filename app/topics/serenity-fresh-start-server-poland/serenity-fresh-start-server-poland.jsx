import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-fresh-start-server-poland');
}

export default function SerenityFreshStartServerPolandKeywordPage() {
  return <StaticKeywordPage slug="serenity-fresh-start-server-poland" />;
}
