import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-old-school-server-mexico');
}

export default function MidhemOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="midhem-old-school-server-mexico" />;
}
