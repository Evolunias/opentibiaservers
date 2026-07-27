import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-classicus-register');
}

export default function HighrateClassicusRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-classicus-register" />;
}
