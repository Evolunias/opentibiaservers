import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-baiak-download');
}

export default function Tibia86BaiakDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-baiak-download" />;
}
