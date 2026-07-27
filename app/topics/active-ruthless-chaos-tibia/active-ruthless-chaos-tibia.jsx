import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ruthless-chaos-tibia');
}

export default function ActiveRuthlessChaosTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-ruthless-chaos-tibia" />;
}
