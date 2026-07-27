import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-eldera-open-tibia');
}

export default function PopularElderaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-eldera-open-tibia" />;
}
