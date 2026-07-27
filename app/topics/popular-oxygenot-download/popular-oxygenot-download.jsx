import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-oxygenot-download');
}

export default function PopularOxygenotDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-oxygenot-download" />;
}
