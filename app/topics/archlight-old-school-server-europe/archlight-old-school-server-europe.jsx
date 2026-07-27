import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-old-school-server-europe');
}

export default function ArchlightOldSchoolServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="archlight-old-school-server-europe" />;
}
