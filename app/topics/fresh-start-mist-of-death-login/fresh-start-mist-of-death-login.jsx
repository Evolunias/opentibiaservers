import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-mist-of-death-login');
}

export default function FreshStartMistOfDeathLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-mist-of-death-login" />;
}
