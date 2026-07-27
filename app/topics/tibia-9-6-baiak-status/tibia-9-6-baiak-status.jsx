import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-baiak-status');
}

export default function Tibia96BaiakStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-baiak-status" />;
}
