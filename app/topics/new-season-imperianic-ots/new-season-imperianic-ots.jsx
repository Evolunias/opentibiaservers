import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-imperianic-ots');
}

export default function NewSeasonImperianicOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-imperianic-ots" />;
}
