import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-seasonal-server-argentina');
}

export default function MediviaSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="medivia-seasonal-server-argentina" />;
}
