import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ruthless-chaos-tibia');
}

export default function LowrateRuthlessChaosTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ruthless-chaos-tibia" />;
}
