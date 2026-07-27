import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-carlinot-open-tibia');
}

export default function CurrentCarlinotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-carlinot-open-tibia" />;
}
