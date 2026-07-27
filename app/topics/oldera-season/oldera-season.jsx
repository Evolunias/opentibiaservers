import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-season');
}

export default function OlderaSeasonKeywordPage() {
  return <StaticKeywordPage slug="oldera-season" />;
}
