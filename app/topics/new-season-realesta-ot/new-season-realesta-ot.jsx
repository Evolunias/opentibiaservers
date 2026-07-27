import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-realesta-ot');
}

export default function NewSeasonRealestaOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-realesta-ot" />;
}
