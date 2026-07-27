import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-oxygenot-server');
}

export default function NewSeasonOxygenotServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-oxygenot-server" />;
}
