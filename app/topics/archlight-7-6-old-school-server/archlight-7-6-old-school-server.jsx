import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-7-6-old-school-server');
}

export default function Archlight76OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-7-6-old-school-server" />;
}
