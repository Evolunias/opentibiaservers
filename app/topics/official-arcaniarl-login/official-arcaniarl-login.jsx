import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-arcaniarl-login');
}

export default function OfficialArcaniarlLoginKeywordPage() {
  return <StaticKeywordPage slug="official-arcaniarl-login" />;
}
