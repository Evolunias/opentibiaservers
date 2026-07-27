import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-serenity-website');
}

export default function NewSeasonSerenityWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-serenity-website" />;
}
