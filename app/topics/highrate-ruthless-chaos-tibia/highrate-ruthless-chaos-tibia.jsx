import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ruthless-chaos-tibia');
}

export default function HighrateRuthlessChaosTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-ruthless-chaos-tibia" />;
}
