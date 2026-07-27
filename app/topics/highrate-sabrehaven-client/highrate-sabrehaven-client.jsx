import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-sabrehaven-client');
}

export default function HighrateSabrehavenClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-sabrehaven-client" />;
}
