import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-mist-of-death-download');
}

export default function NewMistOfDeathDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-mist-of-death-download" />;
}
