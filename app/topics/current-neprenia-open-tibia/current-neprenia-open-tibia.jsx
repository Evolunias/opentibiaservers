import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-neprenia-open-tibia');
}

export default function CurrentNepreniaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-neprenia-open-tibia" />;
}
