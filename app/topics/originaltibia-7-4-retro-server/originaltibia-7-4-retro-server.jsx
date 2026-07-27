import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-7-4-retro-server');
}

export default function Originaltibia74RetroServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-7-4-retro-server" />;
}
