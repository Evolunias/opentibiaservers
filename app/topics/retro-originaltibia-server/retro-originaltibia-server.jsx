import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-originaltibia-server');
}

export default function RetroOriginaltibiaServerKeywordPage() {
  return <StaticKeywordPage slug="retro-originaltibia-server" />;
}
