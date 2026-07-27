import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-canob-download');
}

export default function ActiveCanobDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-canob-download" />;
}
