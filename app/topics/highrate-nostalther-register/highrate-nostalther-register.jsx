import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nostalther-register');
}

export default function HighrateNostaltherRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-nostalther-register" />;
}
