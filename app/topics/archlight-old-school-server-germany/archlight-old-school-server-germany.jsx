import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-old-school-server-germany');
}

export default function ArchlightOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="archlight-old-school-server-germany" />;
}
