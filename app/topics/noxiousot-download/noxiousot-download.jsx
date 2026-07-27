import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-download');
}

export default function NoxiousotDownloadKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-download" />;
}
