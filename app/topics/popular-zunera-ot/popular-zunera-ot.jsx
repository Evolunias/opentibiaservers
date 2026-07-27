import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-zunera-ot');
}

export default function PopularZuneraOtKeywordPage() {
  return <StaticKeywordPage slug="popular-zunera-ot" />;
}
