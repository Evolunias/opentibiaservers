import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-13-evo-servers');
}

export default function Sabrehaven13EvoServersKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-13-evo-servers" />;
}
