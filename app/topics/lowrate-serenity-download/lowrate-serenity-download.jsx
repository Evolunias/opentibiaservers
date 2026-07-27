import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-serenity-download');
}

export default function LowrateSerenityDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-serenity-download" />;
}
