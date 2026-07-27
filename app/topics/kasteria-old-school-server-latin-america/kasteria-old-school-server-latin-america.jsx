import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-old-school-server-latin-america');
}

export default function KasteriaOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-old-school-server-latin-america" />;
}
