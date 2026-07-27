import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-sabrehaven-register');
}

export default function HighrateSabrehavenRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-sabrehaven-register" />;
}
