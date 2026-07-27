import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-noxiousot-download');
}

export default function PopularNoxiousotDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-noxiousot-download" />;
}
