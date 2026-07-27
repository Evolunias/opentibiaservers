import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-blazera-tibia');
}

export default function CurrentBlazeraTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-blazera-tibia" />;
}
