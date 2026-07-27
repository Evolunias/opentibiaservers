import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nostalther-download');
}

export default function ActiveNostaltherDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-nostalther-download" />;
}
