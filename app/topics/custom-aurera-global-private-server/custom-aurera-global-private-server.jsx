import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-aurera-global-private-server');
}

export default function CustomAureraGlobalPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-aurera-global-private-server" />;
}
