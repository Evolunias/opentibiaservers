import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-midhem-official');
}

export default function NewMidhemOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-midhem-official" />;
}
