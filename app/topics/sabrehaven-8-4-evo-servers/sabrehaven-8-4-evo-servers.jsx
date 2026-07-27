import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-4-evo-servers');
}

export default function Sabrehaven84EvoServersKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-4-evo-servers" />;
}
