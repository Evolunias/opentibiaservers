import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-seasonal-server-argentina');
}

export default function NilotSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nilot-seasonal-server-argentina" />;
}
