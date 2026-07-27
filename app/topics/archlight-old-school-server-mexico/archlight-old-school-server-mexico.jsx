import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-old-school-server-mexico');
}

export default function ArchlightOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="archlight-old-school-server-mexico" />;
}
