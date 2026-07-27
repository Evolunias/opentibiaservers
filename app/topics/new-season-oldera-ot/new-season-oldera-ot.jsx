import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-oldera-ot');
}

export default function NewSeasonOlderaOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-oldera-ot" />;
}
