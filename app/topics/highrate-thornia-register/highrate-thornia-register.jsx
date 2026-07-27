import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-thornia-register');
}

export default function HighrateThorniaRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-thornia-register" />;
}
