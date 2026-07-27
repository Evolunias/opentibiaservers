import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-mist-of-death-download');
}

export default function OfficialMistOfDeathDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-mist-of-death-download" />;
}
