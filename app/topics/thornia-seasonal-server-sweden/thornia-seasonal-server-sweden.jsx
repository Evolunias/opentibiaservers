import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-seasonal-server-sweden');
}

export default function ThorniaSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="thornia-seasonal-server-sweden" />;
}
