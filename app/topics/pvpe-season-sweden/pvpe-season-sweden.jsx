import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-season-sweden');
}

export default function PvpeSeasonSwedenKeywordPage() {
  return <StaticKeywordPage slug="pvpe-season-sweden" />;
}
