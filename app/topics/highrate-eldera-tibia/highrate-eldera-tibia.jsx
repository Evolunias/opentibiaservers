import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-eldera-tibia');
}

export default function HighrateElderaTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-eldera-tibia" />;
}
