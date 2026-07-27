import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-15-evo-server');
}

export default function Originaltibia15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-15-evo-server" />;
}
