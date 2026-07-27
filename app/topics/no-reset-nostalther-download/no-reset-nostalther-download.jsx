import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nostalther-download');
}

export default function NoResetNostaltherDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nostalther-download" />;
}
