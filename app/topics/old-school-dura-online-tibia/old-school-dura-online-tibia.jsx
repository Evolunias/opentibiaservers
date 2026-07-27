import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-dura-online-tibia');
}

export default function OldSchoolDuraOnlineTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-dura-online-tibia" />;
}
