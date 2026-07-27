import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-fresh-start-server-germany');
}

export default function SerenityFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="serenity-fresh-start-server-germany" />;
}
