import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-archlight-tibia');
}

export default function OldSchoolArchlightTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-archlight-tibia" />;
}
