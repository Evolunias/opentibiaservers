import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-luminera-register');
}

export default function HighrateLumineraRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-luminera-register" />;
}
