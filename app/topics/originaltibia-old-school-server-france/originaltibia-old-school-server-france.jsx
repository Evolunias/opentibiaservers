import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-old-school-server-france');
}

export default function OriginaltibiaOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-old-school-server-france" />;
}
