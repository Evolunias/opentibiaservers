import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-midhem-ots');
}

export default function NewMidhemOtsKeywordPage() {
  return <StaticKeywordPage slug="new-midhem-ots" />;
}
