import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-arcaniarl-official');
}

export default function FreshStartArcaniarlOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-arcaniarl-official" />;
}
