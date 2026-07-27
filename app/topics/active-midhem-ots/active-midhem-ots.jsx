import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-midhem-ots');
}

export default function ActiveMidhemOtsKeywordPage() {
  return <StaticKeywordPage slug="active-midhem-ots" />;
}
