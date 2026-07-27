import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-demolidores-tibia');
}

export default function OldSchoolDemolidoresTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-demolidores-tibia" />;
}
