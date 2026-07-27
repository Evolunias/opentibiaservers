import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-arcaniarl-ot-server');
}

export default function OfficialArcaniarlOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-arcaniarl-ot-server" />;
}
