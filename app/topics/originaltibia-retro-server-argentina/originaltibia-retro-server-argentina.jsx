import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-retro-server-argentina');
}

export default function OriginaltibiaRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-retro-server-argentina" />;
}
