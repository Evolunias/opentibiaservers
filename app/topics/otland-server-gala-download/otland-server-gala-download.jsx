import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otland-server-gala-download');
}

export default function OtlandServerGalaDownloadKeywordPage() {
  return <StaticKeywordPage slug="otland-server-gala-download" />;
}
