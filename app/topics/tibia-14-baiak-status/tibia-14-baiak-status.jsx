import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-baiak-status');
}

export default function Tibia14BaiakStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-baiak-status" />;
}
