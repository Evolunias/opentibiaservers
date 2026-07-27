import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-old-school-server-latin-america');
}

export default function ArchlightOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="archlight-old-school-server-latin-america" />;
}
