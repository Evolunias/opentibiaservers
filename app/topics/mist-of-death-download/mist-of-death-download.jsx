import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-download');
}

export default function MistOfDeathDownloadKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-download" />;
}
