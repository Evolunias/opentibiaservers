import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-54-retro-server');
}

export default function Originaltibia854RetroServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-54-retro-server" />;
}
