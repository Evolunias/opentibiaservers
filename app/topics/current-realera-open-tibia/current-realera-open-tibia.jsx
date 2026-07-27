import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-realera-open-tibia');
}

export default function CurrentRealeraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-realera-open-tibia" />;
}
