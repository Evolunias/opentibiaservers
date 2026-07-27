import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ameria-open-tibia');
}

export default function CurrentAmeriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-ameria-open-tibia" />;
}
