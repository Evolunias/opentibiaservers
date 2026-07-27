import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-9-6-retro-server');
}

export default function Originaltibia96RetroServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-9-6-retro-server" />;
}
