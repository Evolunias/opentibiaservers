import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-old-school-server-uk');
}

export default function MidhemOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="midhem-old-school-server-uk" />;
}
