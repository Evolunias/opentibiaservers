import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-arcaniarl-client');
}

export default function OfficialArcaniarlClientKeywordPage() {
  return <StaticKeywordPage slug="official-arcaniarl-client" />;
}
