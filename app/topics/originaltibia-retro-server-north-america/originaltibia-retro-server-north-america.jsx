import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-retro-server-north-america');
}

export default function OriginaltibiaRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-retro-server-north-america" />;
}
