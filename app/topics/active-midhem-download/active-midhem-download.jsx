import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-midhem-download');
}

export default function ActiveMidhemDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-midhem-download" />;
}
