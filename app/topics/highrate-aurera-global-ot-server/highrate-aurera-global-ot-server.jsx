import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-aurera-global-ot-server');
}

export default function HighrateAureraGlobalOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-aurera-global-ot-server" />;
}
