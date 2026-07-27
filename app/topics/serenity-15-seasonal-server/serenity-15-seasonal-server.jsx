import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-15-seasonal-server');
}

export default function Serenity15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-15-seasonal-server" />;
}
