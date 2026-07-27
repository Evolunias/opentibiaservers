import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ruthless-chaos-tibia');
}

export default function CustomRuthlessChaosTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-ruthless-chaos-tibia" />;
}
