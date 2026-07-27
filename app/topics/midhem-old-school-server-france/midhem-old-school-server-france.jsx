import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-old-school-server-france');
}

export default function MidhemOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="midhem-old-school-server-france" />;
}
