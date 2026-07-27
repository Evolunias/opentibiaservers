import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-luminera-ot-server');
}

export default function HighrateLumineraOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-luminera-ot-server" />;
}
