import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-server-list-france');
}

export default function OldSchoolServerListFranceKeywordPage() {
  return <StaticKeywordPage slug="old-school-server-list-france" />;
}
