import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-high-exp');
}

export default function TibiaraHighExpKeywordPage() {
  return <StaticKeywordPage slug="tibiara-high-exp" />;
}
