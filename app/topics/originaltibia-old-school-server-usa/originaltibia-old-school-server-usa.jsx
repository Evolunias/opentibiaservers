import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-old-school-server-usa');
}

export default function OriginaltibiaOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-old-school-server-usa" />;
}
