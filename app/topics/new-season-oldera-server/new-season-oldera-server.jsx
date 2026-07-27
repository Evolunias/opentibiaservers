import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-oldera-server');
}

export default function NewSeasonOlderaServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-oldera-server" />;
}
