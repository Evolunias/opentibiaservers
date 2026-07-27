import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-arcaniarl-register');
}

export default function OfficialArcaniarlRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-arcaniarl-register" />;
}
