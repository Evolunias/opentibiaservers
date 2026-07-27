import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-7-72-evo-server');
}

export default function Originaltibia772EvoServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-7-72-evo-server" />;
}
