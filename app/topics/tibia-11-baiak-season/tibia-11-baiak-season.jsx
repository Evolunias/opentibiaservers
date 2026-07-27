import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-baiak-season');
}

export default function Tibia11BaiakSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-baiak-season" />;
}
