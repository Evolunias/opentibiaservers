import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-arcaniarl-official');
}

export default function BestArcaniarlOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-arcaniarl-official" />;
}
