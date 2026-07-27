import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-baiak-status');
}

export default function Tibia100BaiakStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-baiak-status" />;
}
