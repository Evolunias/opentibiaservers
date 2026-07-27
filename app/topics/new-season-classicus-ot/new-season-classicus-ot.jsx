import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-classicus-ot');
}

export default function NewSeasonClassicusOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-classicus-ot" />;
}
