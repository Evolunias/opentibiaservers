import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-arcaniarl-official');
}

export default function TopArcaniarlOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-arcaniarl-official" />;
}
