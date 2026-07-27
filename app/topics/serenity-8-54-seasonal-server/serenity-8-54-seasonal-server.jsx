import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-8-54-seasonal-server');
}

export default function Serenity854SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-8-54-seasonal-server" />;
}
