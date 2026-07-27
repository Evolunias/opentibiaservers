import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-oldera-tibia');
}

export default function OldSchoolOlderaTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-oldera-tibia" />;
}
