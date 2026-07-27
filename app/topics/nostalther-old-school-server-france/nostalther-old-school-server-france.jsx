import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-old-school-server-france');
}

export default function NostaltherOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="nostalther-old-school-server-france" />;
}
