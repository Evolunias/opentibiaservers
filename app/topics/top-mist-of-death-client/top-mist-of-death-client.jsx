import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-mist-of-death-client');
}

export default function TopMistOfDeathClientKeywordPage() {
  return <StaticKeywordPage slug="top-mist-of-death-client" />;
}
