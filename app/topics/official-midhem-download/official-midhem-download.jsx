import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-midhem-download');
}

export default function OfficialMidhemDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-midhem-download" />;
}
