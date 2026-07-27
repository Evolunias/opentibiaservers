import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-7-1-old-school-server');
}

export default function Archlight71OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-7-1-old-school-server" />;
}
