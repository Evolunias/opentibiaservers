import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-archlight-open-tibia');
}

export default function OldSchoolArchlightOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-archlight-open-tibia" />;
}
