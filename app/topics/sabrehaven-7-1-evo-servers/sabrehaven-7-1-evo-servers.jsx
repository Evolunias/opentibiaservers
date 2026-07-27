import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-7-1-evo-servers');
}

export default function Sabrehaven71EvoServersKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-7-1-evo-servers" />;
}
