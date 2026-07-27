import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-season');
}

export default function SerenitySeasonKeywordPage() {
  return <StaticKeywordPage slug="serenity-season" />;
}
