import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-imperianic-download');
}

export default function NewImperianicDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-imperianic-download" />;
}
