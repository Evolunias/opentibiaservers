import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-old-school-server-latin-america');
}

export default function NepreniaOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-old-school-server-latin-america" />;
}
