import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-mist-of-death-login');
}

export default function BestMistOfDeathLoginKeywordPage() {
  return <StaticKeywordPage slug="best-mist-of-death-login" />;
}
