import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-realera-download');
}

export default function ActiveRealeraDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-realera-download" />;
}
