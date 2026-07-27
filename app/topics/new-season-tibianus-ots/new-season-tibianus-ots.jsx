import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibianus-ots');
}

export default function NewSeasonTibianusOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibianus-ots" />;
}
