import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-carlinot-tibia');
}

export default function CurrentCarlinotTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-carlinot-tibia" />;
}
