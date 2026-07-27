import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-7-4-evo-servers');
}

export default function Sabrehaven74EvoServersKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-7-4-evo-servers" />;
}
