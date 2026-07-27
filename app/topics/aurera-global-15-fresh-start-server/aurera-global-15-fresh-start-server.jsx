import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-15-fresh-start-server');
}

export default function AureraGlobal15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-15-fresh-start-server" />;
}
