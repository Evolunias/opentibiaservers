import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-midhem-official');
}

export default function CustomMidhemOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-midhem-official" />;
}
