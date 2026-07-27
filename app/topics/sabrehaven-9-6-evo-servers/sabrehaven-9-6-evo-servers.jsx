import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-9-6-evo-servers');
}

export default function Sabrehaven96EvoServersKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-9-6-evo-servers" />;
}
