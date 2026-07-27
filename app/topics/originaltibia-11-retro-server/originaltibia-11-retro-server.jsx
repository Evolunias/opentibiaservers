import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-11-retro-server');
}

export default function Originaltibia11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-11-retro-server" />;
}
