import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-saintsot-private-server');
}

export default function NewSeasonSaintsotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-saintsot-private-server" />;
}
