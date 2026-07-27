import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-thornia-download');
}

export default function ActiveThorniaDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-thornia-download" />;
}
