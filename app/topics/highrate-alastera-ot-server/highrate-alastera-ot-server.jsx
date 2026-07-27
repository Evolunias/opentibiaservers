import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-alastera-ot-server');
}

export default function HighrateAlasteraOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-alastera-ot-server" />;
}
