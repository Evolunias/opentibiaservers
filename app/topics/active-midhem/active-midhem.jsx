import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-midhem');
}

export default function ActiveMidhemKeywordPage() {
  return <StaticKeywordPage slug="active-midhem" />;
}
