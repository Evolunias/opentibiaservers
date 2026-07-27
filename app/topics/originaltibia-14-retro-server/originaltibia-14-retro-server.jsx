import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-14-retro-server');
}

export default function Originaltibia14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-14-retro-server" />;
}
