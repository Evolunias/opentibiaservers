import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-11-fresh-start-server');
}

export default function AureraGlobal11FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-11-fresh-start-server" />;
}
