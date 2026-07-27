import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-midhem-private-server');
}

export default function NewSeasonMidhemPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-midhem-private-server" />;
}
