import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-old-school-server-canada');
}

export default function MidhemOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="midhem-old-school-server-canada" />;
}
