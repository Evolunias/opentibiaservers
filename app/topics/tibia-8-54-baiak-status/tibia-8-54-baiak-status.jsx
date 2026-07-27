import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-baiak-status');
}

export default function Tibia854BaiakStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-baiak-status" />;
}
