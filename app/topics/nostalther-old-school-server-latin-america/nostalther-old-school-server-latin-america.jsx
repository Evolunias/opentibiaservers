import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-old-school-server-latin-america');
}

export default function NostaltherOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-old-school-server-latin-america" />;
}
