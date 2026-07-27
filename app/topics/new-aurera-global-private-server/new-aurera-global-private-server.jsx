import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-aurera-global-private-server');
}

export default function NewAureraGlobalPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-aurera-global-private-server" />;
}
