import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-7-1-seasonal-server');
}

export default function Serenity71SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-7-1-seasonal-server" />;
}
