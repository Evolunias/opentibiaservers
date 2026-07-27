import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-1-evo-servers');
}

export default function Sabrehaven81EvoServersKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-1-evo-servers" />;
}
