import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-high-exp');
}

export default function ImperianicHighExpKeywordPage() {
  return <StaticKeywordPage slug="imperianic-high-exp" />;
}
