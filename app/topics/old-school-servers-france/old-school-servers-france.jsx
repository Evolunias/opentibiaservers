import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-servers-france');
}

export default function OldSchoolServersFranceKeywordPage() {
  return <StaticKeywordPage slug="old-school-servers-france" />;
}
