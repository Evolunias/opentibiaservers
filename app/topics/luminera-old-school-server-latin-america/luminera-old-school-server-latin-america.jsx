import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-old-school-server-latin-america');
}

export default function LumineraOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="luminera-old-school-server-latin-america" />;
}
