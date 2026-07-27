import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-archlight-official');
}

export default function OldSchoolArchlightOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-archlight-official" />;
}
