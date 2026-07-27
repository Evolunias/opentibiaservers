import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-unline-private-server');
}

export default function NewSeasonUnlinePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-unline-private-server" />;
}
