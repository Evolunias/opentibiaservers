import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-thornia-ot-server');
}

export default function HighrateThorniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-thornia-ot-server" />;
}
