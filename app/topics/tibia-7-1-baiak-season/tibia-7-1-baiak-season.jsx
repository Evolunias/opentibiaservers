import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-baiak-season');
}

export default function Tibia71BaiakSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-baiak-season" />;
}
