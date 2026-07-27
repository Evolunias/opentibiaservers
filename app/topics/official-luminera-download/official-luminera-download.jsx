import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-luminera-download');
}

export default function OfficialLumineraDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-luminera-download" />;
}
