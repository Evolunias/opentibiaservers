import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-unline-download');
}

export default function OfficialUnlineDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-unline-download" />;
}
