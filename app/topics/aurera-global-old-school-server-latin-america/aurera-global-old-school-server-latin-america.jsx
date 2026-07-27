import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-old-school-server-latin-america');
}

export default function AureraGlobalOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-old-school-server-latin-america" />;
}
