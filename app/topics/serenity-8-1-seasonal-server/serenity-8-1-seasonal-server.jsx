import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-8-1-seasonal-server');
}

export default function Serenity81SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-8-1-seasonal-server" />;
}
