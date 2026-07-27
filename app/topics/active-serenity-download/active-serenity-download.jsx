import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-serenity-download');
}

export default function ActiveSerenityDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-serenity-download" />;
}
