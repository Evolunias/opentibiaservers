import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-0-evo-server');
}

export default function Sabrehaven80EvoServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-0-evo-server" />;
}
