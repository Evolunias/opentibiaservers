import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-ot');
}

export default function MidhemOtKeywordPage() {
  return <StaticKeywordPage slug="midhem-ot" />;
}
