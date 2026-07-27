import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-serenity-download');
}

export default function OfficialSerenityDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-serenity-download" />;
}
