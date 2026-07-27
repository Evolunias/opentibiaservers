import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-fun-server');
}

export default function EvoleraFunServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-fun-server" />;
}
