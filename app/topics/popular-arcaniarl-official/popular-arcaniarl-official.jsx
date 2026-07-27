import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-arcaniarl-official');
}

export default function PopularArcaniarlOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-arcaniarl-official" />;
}
