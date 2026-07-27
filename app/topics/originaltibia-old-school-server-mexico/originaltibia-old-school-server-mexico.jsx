import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-old-school-server-mexico');
}

export default function OriginaltibiaOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-old-school-server-mexico" />;
}
