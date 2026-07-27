import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-4-evo-server');
}

export default function Sabrehaven84EvoServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-4-evo-server" />;
}
