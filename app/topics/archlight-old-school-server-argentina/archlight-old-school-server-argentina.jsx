import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-old-school-server-argentina');
}

export default function ArchlightOldSchoolServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="archlight-old-school-server-argentina" />;
}
