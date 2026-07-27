import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ruthless-chaos-tibia');
}

export default function BestRuthlessChaosTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-ruthless-chaos-tibia" />;
}
