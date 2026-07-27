import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-usa-servers');
}

export default function EvoleraUsaServersKeywordPage() {
  return <StaticKeywordPage slug="evolera-usa-servers" />;
}
