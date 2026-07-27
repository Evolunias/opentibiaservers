import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-archlight-server');
}

export default function OldSchoolArchlightServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-archlight-server" />;
}
