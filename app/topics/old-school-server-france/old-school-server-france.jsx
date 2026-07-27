import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-server-france');
}

export default function OldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="old-school-server-france" />;
}
