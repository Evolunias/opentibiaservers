import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-saintsot');
}

export default function NewSeasonSaintsotKeywordPage() {
  return <StaticKeywordPage slug="new-season-saintsot" />;
}
