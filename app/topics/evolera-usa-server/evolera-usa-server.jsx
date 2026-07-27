import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-usa-server');
}

export default function EvoleraUsaServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-usa-server" />;
}
