import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-12-retro-server');
}

export default function Originaltibia12RetroServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-12-retro-server" />;
}
