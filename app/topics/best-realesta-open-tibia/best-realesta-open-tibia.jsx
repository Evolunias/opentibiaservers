import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-realesta-open-tibia');
}

export default function BestRealestaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-realesta-open-tibia" />;
}
