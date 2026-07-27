import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-eldera-tibia');
}

export default function LowrateElderaTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-eldera-tibia" />;
}
