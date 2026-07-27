import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-kasteria-ot-server');
}

export default function HighrateKasteriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-kasteria-ot-server" />;
}
