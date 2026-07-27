import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-dura-online-open-tibia');
}

export default function OldSchoolDuraOnlineOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-dura-online-open-tibia" />;
}
