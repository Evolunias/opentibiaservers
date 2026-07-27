import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-retro-server-mexico');
}

export default function OriginaltibiaRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-retro-server-mexico" />;
}
