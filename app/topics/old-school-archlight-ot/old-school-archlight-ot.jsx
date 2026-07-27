import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-archlight-ot');
}

export default function OldSchoolArchlightOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-archlight-ot" />;
}
