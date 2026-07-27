import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-seasonal-server-argentina');
}

export default function ThorniaSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="thornia-seasonal-server-argentina" />;
}
