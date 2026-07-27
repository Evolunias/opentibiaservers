import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-old-school-server-sweden');
}

export default function ArchlightOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="archlight-old-school-server-sweden" />;
}
