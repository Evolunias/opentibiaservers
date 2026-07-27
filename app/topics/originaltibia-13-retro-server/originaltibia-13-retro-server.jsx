import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-13-retro-server');
}

export default function Originaltibia13RetroServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-13-retro-server" />;
}
