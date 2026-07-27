import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-10-0-evo-servers');
}

export default function Sabrehaven100EvoServersKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-10-0-evo-servers" />;
}
