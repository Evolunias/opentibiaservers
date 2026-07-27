import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-10-0-evo-server');
}

export default function Originaltibia100EvoServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-10-0-evo-server" />;
}
