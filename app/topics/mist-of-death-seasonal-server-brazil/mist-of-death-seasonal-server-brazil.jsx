import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-seasonal-server-brazil');
}

export default function MistOfDeathSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-seasonal-server-brazil" />;
}
