import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-10-0-retro-server');
}

export default function Originaltibia100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-10-0-retro-server" />;
}
