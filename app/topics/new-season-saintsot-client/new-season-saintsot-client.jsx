import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-saintsot-client');
}

export default function NewSeasonSaintsotClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-saintsot-client" />;
}
