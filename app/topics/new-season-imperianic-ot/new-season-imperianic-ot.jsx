import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-imperianic-ot');
}

export default function NewSeasonImperianicOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-imperianic-ot" />;
}
