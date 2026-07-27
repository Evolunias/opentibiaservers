import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-13-evo-server');
}

export default function Originaltibia13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-13-evo-server" />;
}
