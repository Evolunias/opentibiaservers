import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-baiak-status');
}

export default function Tibia15BaiakStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-baiak-status" />;
}
