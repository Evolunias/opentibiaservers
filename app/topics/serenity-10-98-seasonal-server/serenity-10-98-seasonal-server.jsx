import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-10-98-seasonal-server');
}

export default function Serenity1098SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-10-98-seasonal-server" />;
}
