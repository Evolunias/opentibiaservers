import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-midhem-ot');
}

export default function FreshStartMidhemOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-midhem-ot" />;
}
