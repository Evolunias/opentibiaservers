import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-classicus-ots');
}

export default function NewSeasonClassicusOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-classicus-ots" />;
}
