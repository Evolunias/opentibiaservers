import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-old-school-server-poland');
}

export default function ArchlightOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="archlight-old-school-server-poland" />;
}
