import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-miracle-tibia');
}

export default function CurrentMiracleTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-miracle-tibia" />;
}
