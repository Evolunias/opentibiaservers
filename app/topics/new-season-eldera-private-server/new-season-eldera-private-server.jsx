import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-eldera-private-server');
}

export default function NewSeasonElderaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-eldera-private-server" />;
}
