import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nostalther-login');
}

export default function HighrateNostaltherLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-nostalther-login" />;
}
