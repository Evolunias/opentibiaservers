import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-serenity-download');
}

export default function PopularSerenityDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-serenity-download" />;
}
