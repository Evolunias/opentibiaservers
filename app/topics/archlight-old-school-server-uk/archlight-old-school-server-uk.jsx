import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-old-school-server-uk');
}

export default function ArchlightOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="archlight-old-school-server-uk" />;
}
