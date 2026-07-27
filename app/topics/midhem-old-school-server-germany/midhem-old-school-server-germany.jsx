import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-old-school-server-germany');
}

export default function MidhemOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="midhem-old-school-server-germany" />;
}
