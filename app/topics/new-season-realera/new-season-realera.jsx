import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-realera');
}

export default function NewSeasonRealeraKeywordPage() {
  return <StaticKeywordPage slug="new-season-realera" />;
}
