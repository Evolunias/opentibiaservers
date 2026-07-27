import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-4-retro-server');
}

export default function Originaltibia84RetroServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-4-retro-server" />;
}
