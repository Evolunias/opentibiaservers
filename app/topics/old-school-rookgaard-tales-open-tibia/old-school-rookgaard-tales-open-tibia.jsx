import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-rookgaard-tales-open-tibia');
}

export default function OldSchoolRookgaardTalesOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-rookgaard-tales-open-tibia" />;
}
