import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-download');
}

export default function BlazeraDownloadKeywordPage() {
  return <StaticKeywordPage slug="blazera-download" />;
}
