import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-baiak-status');
}

export default function Tibia74BaiakStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-baiak-status" />;
}
