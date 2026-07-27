import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-old-school-server-poland');
}

export default function MidhemOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="midhem-old-school-server-poland" />;
}
