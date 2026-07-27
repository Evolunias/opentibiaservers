import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-xanteria-download');
}

export default function ActiveXanteriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-xanteria-download" />;
}
