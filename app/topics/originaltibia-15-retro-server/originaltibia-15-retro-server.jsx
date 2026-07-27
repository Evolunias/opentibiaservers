import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-15-retro-server');
}

export default function Originaltibia15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-15-retro-server" />;
}
