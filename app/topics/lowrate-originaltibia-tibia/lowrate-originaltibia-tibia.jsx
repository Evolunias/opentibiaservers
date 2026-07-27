import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-originaltibia-tibia');
}

export default function LowrateOriginaltibiaTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-originaltibia-tibia" />;
}
