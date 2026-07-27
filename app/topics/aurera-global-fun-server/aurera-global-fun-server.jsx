import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-fun-server');
}

export default function AureraGlobalFunServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-fun-server" />;
}
