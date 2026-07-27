import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-old-school-server-france');
}

export default function ArchlightOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="archlight-old-school-server-france" />;
}
