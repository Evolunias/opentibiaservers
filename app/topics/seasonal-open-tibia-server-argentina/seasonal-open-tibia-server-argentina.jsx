import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-open-tibia-server-argentina');
}

export default function SeasonalOpenTibiaServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-open-tibia-server-argentina" />;
}
