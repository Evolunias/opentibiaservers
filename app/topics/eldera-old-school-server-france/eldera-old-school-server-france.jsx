import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-old-school-server-france');
}

export default function ElderaOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="eldera-old-school-server-france" />;
}
