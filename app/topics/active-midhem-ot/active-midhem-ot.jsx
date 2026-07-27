import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-midhem-ot');
}

export default function ActiveMidhemOtKeywordPage() {
  return <StaticKeywordPage slug="active-midhem-ot" />;
}
