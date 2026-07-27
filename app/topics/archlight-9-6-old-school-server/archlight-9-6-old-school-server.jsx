import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-9-6-old-school-server');
}

export default function Archlight96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-9-6-old-school-server" />;
}
