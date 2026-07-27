import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-kasteria-open-tibia');
}

export default function CurrentKasteriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-kasteria-open-tibia" />;
}
