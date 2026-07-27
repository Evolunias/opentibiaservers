import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-mist-of-death-download');
}

export default function LowrateMistOfDeathDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-mist-of-death-download" />;
}
