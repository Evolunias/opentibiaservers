import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-serenity-download');
}

export default function BestSerenityDownloadKeywordPage() {
  return <StaticKeywordPage slug="best-serenity-download" />;
}
