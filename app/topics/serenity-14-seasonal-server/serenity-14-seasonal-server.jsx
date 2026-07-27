import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-14-seasonal-server');
}

export default function Serenity14SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-14-seasonal-server" />;
}
