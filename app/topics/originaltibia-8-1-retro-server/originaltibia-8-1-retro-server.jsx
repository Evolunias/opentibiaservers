import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-1-retro-server');
}

export default function Originaltibia81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-1-retro-server" />;
}
