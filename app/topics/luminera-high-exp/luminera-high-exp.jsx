import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-high-exp');
}

export default function LumineraHighExpKeywordPage() {
  return <StaticKeywordPage slug="luminera-high-exp" />;
}
