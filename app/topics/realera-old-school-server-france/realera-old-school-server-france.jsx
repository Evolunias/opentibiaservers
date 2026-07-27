import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-old-school-server-france');
}

export default function RealeraOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="realera-old-school-server-france" />;
}
