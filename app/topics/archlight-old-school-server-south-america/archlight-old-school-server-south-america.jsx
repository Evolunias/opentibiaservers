import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-old-school-server-south-america');
}

export default function ArchlightOldSchoolServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="archlight-old-school-server-south-america" />;
}
