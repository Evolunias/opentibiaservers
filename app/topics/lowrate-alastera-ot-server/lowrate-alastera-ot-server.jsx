import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-alastera-ot-server');
}

export default function LowrateAlasteraOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-alastera-ot-server" />;
}
