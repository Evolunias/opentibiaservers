import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-blazera-private-server');
}

export default function NewSeasonBlazeraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-blazera-private-server" />;
}
