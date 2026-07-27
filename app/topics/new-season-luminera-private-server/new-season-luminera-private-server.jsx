import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-luminera-private-server');
}

export default function NewSeasonLumineraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-luminera-private-server" />;
}
