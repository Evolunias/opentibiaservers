import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-baiak-download');
}

export default function Tibia74BaiakDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-baiak-download" />;
}
