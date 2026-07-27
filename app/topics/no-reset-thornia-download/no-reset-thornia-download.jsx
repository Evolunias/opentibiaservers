import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-thornia-download');
}

export default function NoResetThorniaDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-thornia-download" />;
}
