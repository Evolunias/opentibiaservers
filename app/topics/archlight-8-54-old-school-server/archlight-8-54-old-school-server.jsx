import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-8-54-old-school-server');
}

export default function Archlight854OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-8-54-old-school-server" />;
}
