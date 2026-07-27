import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-realesta-download');
}

export default function NewRealestaDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-realesta-download" />;
}
