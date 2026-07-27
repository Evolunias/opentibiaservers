import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibianus-private-server');
}

export default function NewSeasonTibianusPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibianus-private-server" />;
}
