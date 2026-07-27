import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-midhem-ot');
}

export default function LowrateMidhemOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-midhem-ot" />;
}
