import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-old-school-server-brazil');
}

export default function OriginaltibiaOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-old-school-server-brazil" />;
}
