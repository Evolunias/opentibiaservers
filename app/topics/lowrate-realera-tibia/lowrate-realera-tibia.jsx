import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-realera-tibia');
}

export default function LowrateRealeraTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-realera-tibia" />;
}
