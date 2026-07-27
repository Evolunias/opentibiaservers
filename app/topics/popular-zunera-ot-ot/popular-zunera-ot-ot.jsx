import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-zunera-ot-ot');
}

export default function PopularZuneraOtOtKeywordPage() {
  return <StaticKeywordPage slug="popular-zunera-ot-ot" />;
}
