import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-tibia-private-server-brazil');
}

export default function SeasonalTibiaPrivateServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="seasonal-tibia-private-server-brazil" />;
}
