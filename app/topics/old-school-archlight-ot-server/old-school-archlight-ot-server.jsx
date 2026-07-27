import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-archlight-ot-server');
}

export default function OldSchoolArchlightOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-archlight-ot-server" />;
}
