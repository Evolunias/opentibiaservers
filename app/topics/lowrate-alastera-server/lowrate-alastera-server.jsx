import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-alastera-server');
}

export default function LowrateAlasteraServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-alastera-server" />;
}
