import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-serenity-download');
}

export default function NewSeasonSerenityDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-season-serenity-download" />;
}
