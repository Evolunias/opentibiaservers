import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-sabrehaven-login');
}

export default function HighrateSabrehavenLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-sabrehaven-login" />;
}
