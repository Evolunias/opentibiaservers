import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-xanteria-download');
}

export default function NoResetXanteriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-xanteria-download" />;
}
