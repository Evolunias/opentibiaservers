import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fun-server-download');
}

export default function FunServerDownloadKeywordPage() {
  return <StaticKeywordPage slug="fun-server-download" />;
}
