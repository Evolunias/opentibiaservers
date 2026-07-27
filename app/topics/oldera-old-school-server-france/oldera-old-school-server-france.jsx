import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-old-school-server-france');
}

export default function OlderaOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="oldera-old-school-server-france" />;
}
