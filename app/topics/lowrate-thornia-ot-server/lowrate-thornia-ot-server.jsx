import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-thornia-ot-server');
}

export default function LowrateThorniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-thornia-ot-server" />;
}
