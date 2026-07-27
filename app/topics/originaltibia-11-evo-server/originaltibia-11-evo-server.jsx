import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-11-evo-server');
}

export default function Originaltibia11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-11-evo-server" />;
}
