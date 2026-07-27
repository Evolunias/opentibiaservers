import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-tibia-private-server-poland');
}

export default function SeasonalTibiaPrivateServerPolandKeywordPage() {
  return <StaticKeywordPage slug="seasonal-tibia-private-server-poland" />;
}
