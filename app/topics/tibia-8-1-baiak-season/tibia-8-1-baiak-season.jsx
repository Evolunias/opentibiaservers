import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-baiak-season');
}

export default function Tibia81BaiakSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-baiak-season" />;
}
