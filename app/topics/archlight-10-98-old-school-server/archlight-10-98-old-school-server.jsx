import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-10-98-old-school-server');
}

export default function Archlight1098OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-10-98-old-school-server" />;
}
