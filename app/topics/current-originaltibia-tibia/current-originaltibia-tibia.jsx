import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-originaltibia-tibia');
}

export default function CurrentOriginaltibiaTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-originaltibia-tibia" />;
}
