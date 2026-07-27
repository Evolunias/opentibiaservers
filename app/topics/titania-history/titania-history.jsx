import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('titania-history');
}

export default function TitaniaHistoryKeywordPage() {
  return <StaticKeywordPage slug="titania-history" />;
}
