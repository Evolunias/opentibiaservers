import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-classicus-server');
}

export default function NewSeasonClassicusServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-classicus-server" />;
}
