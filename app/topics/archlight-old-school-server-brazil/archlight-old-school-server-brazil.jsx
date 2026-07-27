import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-old-school-server-brazil');
}

export default function ArchlightOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="archlight-old-school-server-brazil" />;
}
