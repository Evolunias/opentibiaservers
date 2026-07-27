import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-mist-of-death-login');
}

export default function TopMistOfDeathLoginKeywordPage() {
  return <StaticKeywordPage slug="top-mist-of-death-login" />;
}
