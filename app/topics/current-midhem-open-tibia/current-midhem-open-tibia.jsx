import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-midhem-open-tibia');
}

export default function CurrentMidhemOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-midhem-open-tibia" />;
}
