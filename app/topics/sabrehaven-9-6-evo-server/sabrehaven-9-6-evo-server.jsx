import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-9-6-evo-server');
}

export default function Sabrehaven96EvoServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-9-6-evo-server" />;
}
