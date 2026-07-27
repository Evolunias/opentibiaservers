import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-realesta-ots');
}

export default function NewSeasonRealestaOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-realesta-ots" />;
}
