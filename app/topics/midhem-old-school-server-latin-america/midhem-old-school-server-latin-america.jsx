import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-old-school-server-latin-america');
}

export default function MidhemOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-old-school-server-latin-america" />;
}
