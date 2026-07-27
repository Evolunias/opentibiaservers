import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-mist-of-death-client');
}

export default function FreshStartMistOfDeathClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-mist-of-death-client" />;
}
