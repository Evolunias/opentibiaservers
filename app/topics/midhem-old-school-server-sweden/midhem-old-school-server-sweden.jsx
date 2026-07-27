import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-old-school-server-sweden');
}

export default function MidhemOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="midhem-old-school-server-sweden" />;
}
