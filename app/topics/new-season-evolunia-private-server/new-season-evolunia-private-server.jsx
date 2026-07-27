import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-evolunia-private-server');
}

export default function NewSeasonEvoluniaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-evolunia-private-server" />;
}
