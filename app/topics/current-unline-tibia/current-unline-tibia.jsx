import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-unline-tibia');
}

export default function CurrentUnlineTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-unline-tibia" />;
}
