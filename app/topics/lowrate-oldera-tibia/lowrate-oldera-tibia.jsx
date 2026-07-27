import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-oldera-tibia');
}

export default function LowrateOlderaTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-oldera-tibia" />;
}
