import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-infernal-ot-download');
}

export default function PopularInfernalOtDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-infernal-ot-download" />;
}
