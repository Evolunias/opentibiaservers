import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-unline');
}

export default function NewSeasonUnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-unline" />;
}
