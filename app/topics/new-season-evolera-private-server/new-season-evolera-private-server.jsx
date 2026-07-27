import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-evolera-private-server');
}

export default function NewSeasonEvoleraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-evolera-private-server" />;
}
