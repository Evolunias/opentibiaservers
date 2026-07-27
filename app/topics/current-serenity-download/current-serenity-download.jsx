import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-serenity-download');
}

export default function CurrentSerenityDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-serenity-download" />;
}
