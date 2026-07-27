import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-archlight-client');
}

export default function OldSchoolArchlightClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-archlight-client" />;
}
