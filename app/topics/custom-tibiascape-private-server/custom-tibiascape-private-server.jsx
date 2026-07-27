import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiascape-private-server');
}

export default function CustomTibiascapePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiascape-private-server" />;
}
