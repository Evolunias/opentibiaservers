import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-12-evo-servers');
}

export default function Sabrehaven12EvoServersKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-12-evo-servers" />;
}
