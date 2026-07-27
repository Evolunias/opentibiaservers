import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-official');
}

export default function MidhemOfficialKeywordPage() {
  return <StaticKeywordPage slug="midhem-official" />;
}
