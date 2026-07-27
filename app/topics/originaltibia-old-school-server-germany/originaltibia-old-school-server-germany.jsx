import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-old-school-server-germany');
}

export default function OriginaltibiaOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-old-school-server-germany" />;
}
