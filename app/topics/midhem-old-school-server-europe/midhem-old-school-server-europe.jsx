import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-old-school-server-europe');
}

export default function MidhemOldSchoolServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="midhem-old-school-server-europe" />;
}
