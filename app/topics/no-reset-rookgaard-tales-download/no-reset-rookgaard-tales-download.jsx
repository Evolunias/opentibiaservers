import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-rookgaard-tales-download');
}

export default function NoResetRookgaardTalesDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-rookgaard-tales-download" />;
}
