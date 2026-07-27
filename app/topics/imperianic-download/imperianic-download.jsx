import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-download');
}

export default function ImperianicDownloadKeywordPage() {
  return <StaticKeywordPage slug="imperianic-download" />;
}
