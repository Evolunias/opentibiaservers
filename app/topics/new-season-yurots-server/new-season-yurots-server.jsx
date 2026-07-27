import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-yurots-server');
}

export default function NewSeasonYurotsServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-yurots-server" />;
}
