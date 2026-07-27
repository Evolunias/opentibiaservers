import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-13-evo-server');
}

export default function Sabrehaven13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-13-evo-server" />;
}
