import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-realera-open-tibia');
}

export default function BestRealeraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-realera-open-tibia" />;
}
