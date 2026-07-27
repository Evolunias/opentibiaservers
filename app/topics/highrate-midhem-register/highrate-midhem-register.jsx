import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-midhem-register');
}

export default function HighrateMidhemRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-midhem-register" />;
}
