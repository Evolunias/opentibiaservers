import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-13-seasonal-server');
}

export default function Serenity13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-13-seasonal-server" />;
}
