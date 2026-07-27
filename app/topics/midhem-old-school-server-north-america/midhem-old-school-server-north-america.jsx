import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-old-school-server-north-america');
}

export default function MidhemOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-old-school-server-north-america" />;
}
