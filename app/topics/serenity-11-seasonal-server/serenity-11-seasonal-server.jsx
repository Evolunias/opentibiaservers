import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-11-seasonal-server');
}

export default function Serenity11SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-11-seasonal-server" />;
}
