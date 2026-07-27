import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-7-4-evo-server');
}

export default function Sabrehaven74EvoServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-7-4-evo-server" />;
}
