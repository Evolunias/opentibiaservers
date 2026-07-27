import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-serenity-download');
}

export default function HighrateSerenityDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-serenity-download" />;
}
