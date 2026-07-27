import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-realera-tibia');
}

export default function OldSchoolRealeraTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-realera-tibia" />;
}
