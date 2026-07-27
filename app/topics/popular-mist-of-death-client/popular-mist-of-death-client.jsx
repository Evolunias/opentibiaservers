import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-mist-of-death-client');
}

export default function PopularMistOfDeathClientKeywordPage() {
  return <StaticKeywordPage slug="popular-mist-of-death-client" />;
}
