import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-serenity-download');
}

export default function CustomSerenityDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-serenity-download" />;
}
