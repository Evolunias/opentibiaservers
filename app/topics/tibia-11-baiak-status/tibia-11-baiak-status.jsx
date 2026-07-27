import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-baiak-status');
}

export default function Tibia11BaiakStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-baiak-status" />;
}
