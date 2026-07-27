import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibianus-open-tibia');
}

export default function CurrentTibianusOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-tibianus-open-tibia" />;
}
