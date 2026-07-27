import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-high-exp');
}

export default function NilotHighExpKeywordPage() {
  return <StaticKeywordPage slug="nilot-high-exp" />;
}
