import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-serenity-download');
}

export default function NewSerenityDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-serenity-download" />;
}
