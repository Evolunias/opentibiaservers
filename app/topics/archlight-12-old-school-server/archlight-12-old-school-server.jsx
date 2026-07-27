import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-12-old-school-server');
}

export default function Archlight12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-12-old-school-server" />;
}
