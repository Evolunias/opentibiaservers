import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('amera-wars');
}

export default function AmeraWarsKeywordPage() {
  return <StaticKeywordPage slug="amera-wars" />;
}
