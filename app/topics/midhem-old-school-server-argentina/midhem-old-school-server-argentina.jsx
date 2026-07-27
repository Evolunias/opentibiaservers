import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-old-school-server-argentina');
}

export default function MidhemOldSchoolServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="midhem-old-school-server-argentina" />;
}
