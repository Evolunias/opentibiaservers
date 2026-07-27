import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-realera-download');
}

export default function NewRealeraDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-realera-download" />;
}
