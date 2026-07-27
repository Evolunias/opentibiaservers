import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-eldera-ot');
}

export default function NewSeasonElderaOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-eldera-ot" />;
}
