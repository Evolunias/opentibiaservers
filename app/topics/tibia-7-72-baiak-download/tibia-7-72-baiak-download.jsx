import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-baiak-download');
}

export default function Tibia772BaiakDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-baiak-download" />;
}
