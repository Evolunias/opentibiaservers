import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-old-school-server-latin-america');
}

export default function TibiantisOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-old-school-server-latin-america" />;
}
