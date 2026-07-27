import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-originaltibia-open-tibia');
}

export default function CurrentOriginaltibiaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-originaltibia-open-tibia" />;
}
