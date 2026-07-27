import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-old-school-server-canada');
}

export default function ArchlightOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="archlight-old-school-server-canada" />;
}
