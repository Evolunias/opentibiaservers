import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-10-98-evo-server');
}

export default function Originaltibia1098EvoServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-10-98-evo-server" />;
}
