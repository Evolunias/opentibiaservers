import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-realesta-open-tibia');
}

export default function CurrentRealestaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-realesta-open-tibia" />;
}
