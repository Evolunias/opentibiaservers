import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-midhem-official');
}

export default function ActiveMidhemOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-midhem-official" />;
}
