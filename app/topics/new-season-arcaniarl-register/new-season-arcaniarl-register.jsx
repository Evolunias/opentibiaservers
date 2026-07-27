import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-arcaniarl-register');
}

export default function NewSeasonArcaniarlRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-arcaniarl-register" />;
}
