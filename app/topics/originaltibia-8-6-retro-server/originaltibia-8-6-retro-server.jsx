import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-6-retro-server');
}

export default function Originaltibia86RetroServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-6-retro-server" />;
}
