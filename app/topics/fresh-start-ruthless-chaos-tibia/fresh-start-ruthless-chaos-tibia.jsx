import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ruthless-chaos-tibia');
}

export default function FreshStartRuthlessChaosTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ruthless-chaos-tibia" />;
}
