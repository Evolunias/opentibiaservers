import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-baiak-season');
}

export default function Tibia854BaiakSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-baiak-season" />;
}
