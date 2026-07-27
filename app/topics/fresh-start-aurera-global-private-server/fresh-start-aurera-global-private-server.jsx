import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-aurera-global-private-server');
}

export default function FreshStartAureraGlobalPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-aurera-global-private-server" />;
}
