import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-8-4-seasonal-server');
}

export default function Serenity84SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-8-4-seasonal-server" />;
}
