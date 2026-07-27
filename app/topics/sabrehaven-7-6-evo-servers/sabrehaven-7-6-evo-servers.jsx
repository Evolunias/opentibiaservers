import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-7-6-evo-servers');
}

export default function Sabrehaven76EvoServersKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-7-6-evo-servers" />;
}
