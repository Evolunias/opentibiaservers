import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-sabrehaven-ot-server');
}

export default function HighrateSabrehavenOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-sabrehaven-ot-server" />;
}
