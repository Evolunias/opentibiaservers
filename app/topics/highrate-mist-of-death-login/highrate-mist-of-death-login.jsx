import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-mist-of-death-login');
}

export default function HighrateMistOfDeathLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-mist-of-death-login" />;
}
