import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-baiak-status');
}

export default function Tibia76BaiakStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-baiak-status" />;
}
