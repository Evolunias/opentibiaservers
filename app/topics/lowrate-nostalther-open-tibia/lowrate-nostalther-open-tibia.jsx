import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nostalther-open-tibia');
}

export default function LowrateNostaltherOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nostalther-open-tibia" />;
}
