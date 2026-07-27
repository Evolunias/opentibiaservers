import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-old-school-server-latin-america');
}

export default function CanobOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="canob-old-school-server-latin-america" />;
}
