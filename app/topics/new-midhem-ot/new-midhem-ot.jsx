import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-midhem-ot');
}

export default function NewMidhemOtKeywordPage() {
  return <StaticKeywordPage slug="new-midhem-ot" />;
}
