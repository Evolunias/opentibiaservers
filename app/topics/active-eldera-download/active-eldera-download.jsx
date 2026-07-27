import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-eldera-download');
}

export default function ActiveElderaDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-eldera-download" />;
}
