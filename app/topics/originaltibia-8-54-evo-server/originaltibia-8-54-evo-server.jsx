import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-54-evo-server');
}

export default function Originaltibia854EvoServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-54-evo-server" />;
}
