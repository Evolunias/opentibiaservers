import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-baiak-download');
}

export default function Tibia80BaiakDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-baiak-download" />;
}
