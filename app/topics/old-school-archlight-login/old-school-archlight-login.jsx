import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-archlight-login');
}

export default function OldSchoolArchlightLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-archlight-login" />;
}
