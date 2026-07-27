import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-retro-server-brazil');
}

export default function OriginaltibiaRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-retro-server-brazil" />;
}
