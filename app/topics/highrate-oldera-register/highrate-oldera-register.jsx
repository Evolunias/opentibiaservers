import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-oldera-register');
}

export default function HighrateOlderaRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-oldera-register" />;
}
