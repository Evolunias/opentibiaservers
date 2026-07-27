import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-download');
}

export default function SerenityDownloadKeywordPage() {
  return <StaticKeywordPage slug="serenity-download" />;
}
