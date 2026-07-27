import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-eldera-ot');
}

export default function PopularElderaOtKeywordPage() {
  return <StaticKeywordPage slug="popular-eldera-ot" />;
}
