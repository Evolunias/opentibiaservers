import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-mist-of-death-server');
}

export default function PopularMistOfDeathServerKeywordPage() {
  return <StaticKeywordPage slug="popular-mist-of-death-server" />;
}
