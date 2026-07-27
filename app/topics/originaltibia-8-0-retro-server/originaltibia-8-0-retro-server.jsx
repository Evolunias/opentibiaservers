import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-0-retro-server');
}

export default function Originaltibia80RetroServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-0-retro-server" />;
}
