import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-retro-server-canada');
}

export default function OriginaltibiaRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-retro-server-canada" />;
}
