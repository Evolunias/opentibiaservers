import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ruthless-chaos-tibia');
}

export default function NewRuthlessChaosTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-ruthless-chaos-tibia" />;
}
