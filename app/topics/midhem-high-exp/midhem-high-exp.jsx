import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-high-exp');
}

export default function MidhemHighExpKeywordPage() {
  return <StaticKeywordPage slug="midhem-high-exp" />;
}
