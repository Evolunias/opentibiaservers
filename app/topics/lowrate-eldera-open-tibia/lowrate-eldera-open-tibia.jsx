import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-eldera-open-tibia');
}

export default function LowrateElderaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-eldera-open-tibia" />;
}
