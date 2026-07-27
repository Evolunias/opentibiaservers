import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-9-6-evo-server');
}

export default function Originaltibia96EvoServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-9-6-evo-server" />;
}
