import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-11-evo-server');
}

export default function Sabrehaven11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-11-evo-server" />;
}
