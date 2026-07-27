import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-15-old-school-server');
}

export default function Archlight15OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-15-old-school-server" />;
}
