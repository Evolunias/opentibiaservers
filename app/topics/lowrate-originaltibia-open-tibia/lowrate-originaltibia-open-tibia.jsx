import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-originaltibia-open-tibia');
}

export default function LowrateOriginaltibiaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-originaltibia-open-tibia" />;
}
