import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ruthless-chaos-tibia');
}

export default function OldSchoolRuthlessChaosTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-ruthless-chaos-tibia" />;
}
