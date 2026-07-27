import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-realera-tibia');
}

export default function CurrentRealeraTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-realera-tibia" />;
}
