import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-serenity-server');
}

export default function SeasonalSerenityServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-serenity-server" />;
}
