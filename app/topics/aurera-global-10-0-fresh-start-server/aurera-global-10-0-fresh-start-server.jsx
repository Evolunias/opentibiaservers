import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-10-0-fresh-start-server');
}

export default function AureraGlobal100FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-10-0-fresh-start-server" />;
}
