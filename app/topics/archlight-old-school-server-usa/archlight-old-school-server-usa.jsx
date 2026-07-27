import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-old-school-server-usa');
}

export default function ArchlightOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="archlight-old-school-server-usa" />;
}
