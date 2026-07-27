import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-sabrehaven-server');
}

export default function HighrateSabrehavenServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-sabrehaven-server" />;
}
