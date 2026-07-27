import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-14-old-school-server');
}

export default function Archlight14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-14-old-school-server" />;
}
