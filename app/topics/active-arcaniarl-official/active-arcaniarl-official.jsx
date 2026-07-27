import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-arcaniarl-official');
}

export default function ActiveArcaniarlOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-arcaniarl-official" />;
}
