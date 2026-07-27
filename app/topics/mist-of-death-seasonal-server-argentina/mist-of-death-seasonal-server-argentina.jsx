import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-seasonal-server-argentina');
}

export default function MistOfDeathSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-seasonal-server-argentina" />;
}
