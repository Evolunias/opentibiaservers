import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-server-download');
}

export default function EvoServerDownloadKeywordPage() {
  return <StaticKeywordPage slug="evo-server-download" />;
}
