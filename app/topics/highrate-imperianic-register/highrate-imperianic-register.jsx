import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-imperianic-register');
}

export default function HighrateImperianicRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-imperianic-register" />;
}
