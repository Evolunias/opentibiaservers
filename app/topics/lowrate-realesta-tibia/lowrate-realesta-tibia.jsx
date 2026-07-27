import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-realesta-tibia');
}

export default function LowrateRealestaTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-realesta-tibia" />;
}
