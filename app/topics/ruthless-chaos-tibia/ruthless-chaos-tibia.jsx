import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-tibia');
}

export default function RuthlessChaosTibiaKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-tibia" />;
}
