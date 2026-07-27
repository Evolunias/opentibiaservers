import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-alastera-private-server');
}

export default function LowrateAlasteraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-alastera-private-server" />;
}
