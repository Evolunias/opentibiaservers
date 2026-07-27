import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-seasonal-server-argentina');
}

export default function MidhemSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="midhem-seasonal-server-argentina" />;
}
