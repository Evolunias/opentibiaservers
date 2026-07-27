import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-8-0-fresh-start-server');
}

export default function AureraGlobal80FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-8-0-fresh-start-server" />;
}
