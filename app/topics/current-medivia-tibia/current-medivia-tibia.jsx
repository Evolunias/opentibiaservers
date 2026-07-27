import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-medivia-tibia');
}

export default function CurrentMediviaTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-medivia-tibia" />;
}
