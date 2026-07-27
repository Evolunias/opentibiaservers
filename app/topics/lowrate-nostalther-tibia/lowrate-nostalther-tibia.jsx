import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nostalther-tibia');
}

export default function LowrateNostaltherTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nostalther-tibia" />;
}
