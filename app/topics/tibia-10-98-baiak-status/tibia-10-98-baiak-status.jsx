import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-baiak-status');
}

export default function Tibia1098BaiakStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-baiak-status" />;
}
