import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-high-exp');
}

export default function RealestaHighExpKeywordPage() {
  return <StaticKeywordPage slug="realesta-high-exp" />;
}
