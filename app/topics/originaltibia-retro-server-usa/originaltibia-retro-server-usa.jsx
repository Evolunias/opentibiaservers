import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-retro-server-usa');
}

export default function OriginaltibiaRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-retro-server-usa" />;
}
