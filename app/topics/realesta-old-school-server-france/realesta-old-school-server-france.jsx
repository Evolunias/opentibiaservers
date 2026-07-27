import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-old-school-server-france');
}

export default function RealestaOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="realesta-old-school-server-france" />;
}
