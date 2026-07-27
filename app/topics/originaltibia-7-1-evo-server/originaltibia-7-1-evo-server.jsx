import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-7-1-evo-server');
}

export default function Originaltibia71EvoServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-7-1-evo-server" />;
}
