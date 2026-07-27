import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-arcaniarl-official');
}

export default function NewArcaniarlOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-arcaniarl-official" />;
}
