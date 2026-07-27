import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-rookgaard-tales-tibia');
}

export default function OldSchoolRookgaardTalesTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-rookgaard-tales-tibia" />;
}
