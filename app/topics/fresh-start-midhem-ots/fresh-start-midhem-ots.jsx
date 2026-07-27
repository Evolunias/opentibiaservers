import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-midhem-ots');
}

export default function FreshStartMidhemOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-midhem-ots" />;
}
