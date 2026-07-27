import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-saintsot-server');
}

export default function NewSeasonSaintsotServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-saintsot-server" />;
}
