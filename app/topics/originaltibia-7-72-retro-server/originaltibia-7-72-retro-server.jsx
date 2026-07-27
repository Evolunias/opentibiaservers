import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-7-72-retro-server');
}

export default function Originaltibia772RetroServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-7-72-retro-server" />;
}
