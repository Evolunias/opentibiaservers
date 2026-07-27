import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-eldera-open-tibia');
}

export default function BestElderaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-eldera-open-tibia" />;
}
