import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-arcaniarl-official');
}

export default function CustomArcaniarlOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-arcaniarl-official" />;
}
