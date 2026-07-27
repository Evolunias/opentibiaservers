import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-evolunia-client');
}

export default function NewSeasonEvoluniaClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-evolunia-client" />;
}
