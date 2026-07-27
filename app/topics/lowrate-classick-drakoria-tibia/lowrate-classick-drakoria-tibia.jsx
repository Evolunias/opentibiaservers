import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-classick-drakoria-tibia');
}

export default function LowrateClassickDrakoriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-classick-drakoria-tibia" />;
}
