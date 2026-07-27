import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibianus-ot');
}

export default function NewSeasonTibianusOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibianus-ot" />;
}
