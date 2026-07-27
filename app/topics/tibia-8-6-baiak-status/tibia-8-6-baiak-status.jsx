import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-baiak-status');
}

export default function Tibia86BaiakStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-baiak-status" />;
}
