import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-9-6-seasonal-server');
}

export default function Serenity96SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-9-6-seasonal-server" />;
}
