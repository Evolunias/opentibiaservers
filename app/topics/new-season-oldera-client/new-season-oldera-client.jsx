import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-oldera-client');
}

export default function NewSeasonOlderaClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-oldera-client" />;
}
