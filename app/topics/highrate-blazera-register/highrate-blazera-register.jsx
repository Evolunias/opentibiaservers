import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-blazera-register');
}

export default function HighrateBlazeraRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-blazera-register" />;
}
