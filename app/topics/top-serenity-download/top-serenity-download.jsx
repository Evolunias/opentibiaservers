import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-serenity-download');
}

export default function TopSerenityDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-serenity-download" />;
}
