import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiara-ot');
}

export default function PopularTibiaraOtKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiara-ot" />;
}
