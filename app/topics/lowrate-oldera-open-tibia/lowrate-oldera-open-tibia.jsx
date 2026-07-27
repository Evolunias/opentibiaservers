import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-oldera-open-tibia');
}

export default function LowrateOlderaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-oldera-open-tibia" />;
}
