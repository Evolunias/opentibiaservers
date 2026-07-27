import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-kasteria-open-tibia');
}

export default function BestKasteriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-kasteria-open-tibia" />;
}
