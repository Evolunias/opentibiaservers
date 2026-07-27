import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-evolunia-server');
}

export default function NewSeasonEvoluniaServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-evolunia-server" />;
}
