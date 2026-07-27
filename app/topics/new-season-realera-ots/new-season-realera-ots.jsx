import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-realera-ots');
}

export default function NewSeasonRealeraOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-realera-ots" />;
}
