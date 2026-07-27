import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-carlinot-register');
}

export default function LowrateCarlinotRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-carlinot-register" />;
}
