import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-midhem-tibia');
}

export default function CurrentMidhemTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-midhem-tibia" />;
}
