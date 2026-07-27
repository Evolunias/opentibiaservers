import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-xanteria-open-tibia');
}

export default function OldSchoolXanteriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-xanteria-open-tibia" />;
}
