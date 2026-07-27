import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-baiak-download');
}

export default function Tibia14BaiakDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-baiak-download" />;
}
