import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-carlinot-register');
}

export default function HighrateCarlinotRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-carlinot-register" />;
}
