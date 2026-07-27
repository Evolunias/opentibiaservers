import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-archlight-ots');
}

export default function OldSchoolArchlightOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-archlight-ots" />;
}
