import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-baiak-status');
}

export default function Tibia12BaiakStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-baiak-status" />;
}
