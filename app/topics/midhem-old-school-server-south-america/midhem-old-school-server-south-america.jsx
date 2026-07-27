import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-old-school-server-south-america');
}

export default function MidhemOldSchoolServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-old-school-server-south-america" />;
}
