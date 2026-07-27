import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-old-school-server-north-america');
}

export default function ArchlightOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="archlight-old-school-server-north-america" />;
}
