import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-imperianic-ot');
}

export default function PopularImperianicOtKeywordPage() {
  return <StaticKeywordPage slug="popular-imperianic-ot" />;
}
