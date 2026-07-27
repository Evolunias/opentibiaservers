import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-mist-of-death-login');
}

export default function LowrateMistOfDeathLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-mist-of-death-login" />;
}
