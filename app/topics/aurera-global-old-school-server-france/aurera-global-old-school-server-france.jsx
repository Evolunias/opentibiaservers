import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-old-school-server-france');
}

export default function AureraGlobalOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-old-school-server-france" />;
}
