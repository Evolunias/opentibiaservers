import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-ots');
}

export default function MidhemOtsKeywordPage() {
  return <StaticKeywordPage slug="midhem-ots" />;
}
