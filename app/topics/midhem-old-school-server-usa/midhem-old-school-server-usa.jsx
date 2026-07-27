import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-old-school-server-usa');
}

export default function MidhemOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="midhem-old-school-server-usa" />;
}
