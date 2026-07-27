import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-eldera-download');
}

export default function NewElderaDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-eldera-download" />;
}
