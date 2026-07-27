import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-ruthless-chaos-tibia');
}

export default function TopRuthlessChaosTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-ruthless-chaos-tibia" />;
}
