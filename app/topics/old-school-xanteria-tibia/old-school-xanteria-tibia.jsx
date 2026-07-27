import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-xanteria-tibia');
}

export default function OldSchoolXanteriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-xanteria-tibia" />;
}
