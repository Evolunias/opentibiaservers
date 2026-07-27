import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-sabrehaven-download');
}

export default function PopularSabrehavenDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-sabrehaven-download" />;
}
