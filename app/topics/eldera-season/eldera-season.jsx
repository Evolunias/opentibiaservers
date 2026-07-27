import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-season');
}

export default function ElderaSeasonKeywordPage() {
  return <StaticKeywordPage slug="eldera-season" />;
}
