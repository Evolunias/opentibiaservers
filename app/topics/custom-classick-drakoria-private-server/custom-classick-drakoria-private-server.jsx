import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-classick-drakoria-private-server');
}

export default function CustomClassickDrakoriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-classick-drakoria-private-server" />;
}
