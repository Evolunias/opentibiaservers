import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-old-school-server-latin-america');
}

export default function RealeraOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-old-school-server-latin-america" />;
}
